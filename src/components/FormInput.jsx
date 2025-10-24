function FormInput({ label, name, value, onChange, textarea = false, error }) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-text-light dark:text-text-dark">{label} {error && <span className="text-red-500">({error})</span>}</label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
    </div>
  );
}

export default FormInput;