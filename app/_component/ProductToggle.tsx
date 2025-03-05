function ProductToggle({
  name,
  value,
  checked,
  onChange,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div className="form-control ">
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className=" toggle toggle-xs toggle-primary "
      />
    </div>
  );
}

export default ProductToggle;
