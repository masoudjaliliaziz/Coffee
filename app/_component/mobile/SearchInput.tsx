function SearchInput() {
  return (
    <label className="floating-label w-full md:hidden mt-6">
      <span>جستجو</span>
      <input
        type="text"
        className="input input-ghost  border-primary-content w-full "
        placeholder={`جستجو `}
      />
    </label>
  );
}

export default SearchInput;
