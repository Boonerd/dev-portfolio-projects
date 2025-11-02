/* ====================  GLOBALS  ==================== */
const modal          = document.getElementById('modal');
const addBtn         = document.getElementById('add-btn');
const form           = document.getElementById('expense-form');
const expenseList    = document.getElementById('expense-list');
const totalEl        = document.getElementById('total');
const regretEl       = document.getElementById('regret');
const happyEl        = document.getElementById('happy');
const insightCard    = document.getElementById('insight-card');
const exportBtn      = document.getElementById('export-btn');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
let selectedEmotion = '';
let categoryChart = null;                     // Chart.js instance

/* ====================  MODAL & EMOTION  ==================== */
addBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  document.getElementById('date').valueAsDate = new Date();
});
modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

document.querySelectorAll('.emoji-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedEmotion = btn.dataset.emotion;
  });
});

/* ====================  ADD EXPENSE  ==================== */
form.addEventListener('submit', e => {
  e.preventDefault();
  const expense = {
    id: Date.now(),
    amount: parseFloat(document.getElementById('amount').value),
    category: document.getElementById('category').value,
    date: document.getElementById('date').value,
    emotion: selectedEmotion
  };
  expenses.push(expense);
  localStorage.setItem('expenses', JSON.stringify(expenses));

  form.reset();
  document.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
  modal.style.display = 'none';

  refreshAll();
});

/* ====================  DELETE EXPENSE  ==================== */
function attachDeleteHandlers() {
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.onclick = () => {
      const id = Number(btn.dataset.id);
      expenses = expenses.filter(ex => ex.id !== id);
      localStorage.setItem('expenses', JSON.stringify(expenses));
      refreshAll();
    };
  });
}

/* ====================  RENDER LIST  ==================== */
function renderExpenses() {
  expenseList.innerHTML = '';
  const month = getThisMonthExpenses();

  month.forEach(exp => {
    const div = document.createElement('div');
    div.className = 'expense-item';
    div.innerHTML = `
      <div class="info">
        ${exp.category} – KSh ${exp.amount}
      </div>
      <div class="emotion">${getEmoji(exp.emotion)}</div>
      <button class="delete-btn" data-id="${exp.id}">Trash</button>
    `;
    expenseList.appendChild(div);
  });
  attachDeleteHandlers();
}

/* ====================  HELPERS  ==================== */
function getThisMonthExpenses() {
  const now = new Date();
  return expenses.filter(exp => {
    const d = new Date(exp.date);
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  });
}
function getEmoji(emotion) {
  const map = { happy:'Happy', neutral:'Neutral', regret:'Regret', excited:'Excited' };
  return map[emotion] || 'Neutral';
}

/* ====================  SUMMARY  ==================== */
function updateSummary() {
  const month = getThisMonthExpenses();
  const total = month.reduce((s, e) => s + e.amount, 0);
  const regretCnt = month.filter(e => e.emotion === 'regret').length;
  const happyCnt  = month.filter(e => e.emotion === 'happy').length;
  const totalCnt  = month.length || 1;

  totalEl.textContent   = total.toLocaleString();
  regretEl.textContent  = Math.round((regretCnt / totalCnt) * 100);
  happyEl.textContent   = Math.round((happyCnt  / totalCnt) * 100);
}

/* ====================  PIE CHART  ==================== */
function updateChart() {
  const month = getThisMonthExpenses();
  const cats = {};
  month.forEach(e => cats[e.category] = (cats[e.category] || 0) + e.amount);

  const ctx = document.getElementById('categoryChart').getContext('2d');
  if (categoryChart) categoryChart.destroy();

  categoryChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(cats),
      datasets: [{ data: Object.values(cats),
        backgroundColor: ['#FF6384','#36A2EB','#FFCE56','#4BC0C0','#9966FF']
      }]
    },
    options: { responsive:true, plugins:{legend:{position:'bottom'}} }
  });
}

/* ====================  SMART INSIGHT  ==================== */
function updateInsight() {
  const month = getThisMonthExpenses();
  if (month.length === 0) { insightCard.textContent = ''; return; }

  // Find category with highest regret-spend
  const regretMap = {};
  month.forEach(e => {
    if (e.emotion === 'regret') {
      regretMap[e.category] = (regretMap[e.category] || 0) + e.amount;
    }
  });
  let topCat = '', topAmt = 0, totalRegret = 0;
  for (const [cat, amt] of Object.entries(regretMap)) {
    totalRegret += amt;
    if (amt > topAmt) { topAmt = amt; topCat = cat; }
  }
  if (!topCat) { insightCard.textContent = 'No regretful spends this month.'; return; }

  const percent = Math.round((topAmt / totalRegret) * 100);
  insightCard.innerHTML = `You spent <strong>${percent}%</strong> of regretful money on <strong>${topCat}</strong>.`;
}

/* ====================  EXPORT CSV  ==================== */
exportBtn.addEventListener('click', () => {
  const month = getThisMonthExpenses();
  if (!month.length) { alert('No expenses this month!'); return; }

  let csv = 'Date,Category,Amount (KSh),Emotion\n';
  month.forEach(e => {
    const emo = e.emotion.charAt(0).toUpperCase() + e.emotion.slice(1);
    csv += `${e.date},${e.category},${e.amount},${emo}\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = `EmoTrack_Expenses_${new Date().toISOString().slice(0,7)}.csv`;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

/* ====================  REFRESH ALL  ==================== */
function refreshAll() {
  renderExpenses();
  updateSummary();
  updateChart();
  updateInsight();
}

/* ====================  INIT  ==================== */
refreshAll();

document.getElementById('export-pdf-btn')?.addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const month = getThisMonthExpenses();
  if (!month.length) return alert('No data!');

  doc.setFontSize(16);
  doc.text('EmoTrack - Monthly Report', 20, 20);
  doc.setFontSize(12);
  doc.text(`Generated: ${new Date().toLocaleDateString()}`, 20, 30);

  let y = 50;
  month.forEach(e => {
    doc.text(`${e.date} | ${e.category} | KSh ${e.amount} | ${getEmoji(e.emotion)}`, 20, y);
    y += 10;
  });

  doc.save(`EmoTrack_Report_${new Date().toISOString().slice(0,7)}.pdf`);
});