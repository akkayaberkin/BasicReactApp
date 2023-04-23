function OurEmployeeItem({ image, name, content, price }) {
  return (
    <div className="ourEmployeeItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1 style={{ marginBottom: '10px' }}>{name}</h1>
      <h6 >{content}</h6>
    </div>
  );
}

export default OurEmployeeItem;
