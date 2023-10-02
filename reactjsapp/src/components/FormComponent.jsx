const FormComponent = () => {
  return (
    <>
      <form action="">
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input type="text" placeholder="Enter your password" />
        </div>
        <button>Login</button>
      </form>
    </>
  );
};

export default FormComponent;
