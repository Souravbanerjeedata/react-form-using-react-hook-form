import { useForm } from "react-hook-form";

const SignupForm = () => {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    alert(
      `Your email: "${data.email}" and password: "${data.password}" have been submitted.`,
    );
  }
  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: ".5rem" }}>
          <label>
            Email{" "}
            <input
              type="email"
              placeholder="example@email.com"
              {...register("email", { required: "Email is required" })}
            />
          </label>
        </div>
        <div style={{ marginBottom: ".5rem" }}>
          <label>
            Password{" "}
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password at least needs 4 characters",
                },
                maxLength: {
                  value: 12,
                  message: "Password can not exceed 12 characters",
                },
              })}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
