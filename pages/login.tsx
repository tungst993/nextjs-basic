import { NextPage } from "next";
import styles from "../styles/login.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSignInMutation } from "../src/graphql/mutations/signIn.generated";
import { useRouter } from "next/router";

type Inputs = {
  username: string;
  password: string;
};

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    login({
      variables: data,
    });
  };

  const [login] = useSignInMutation({
    onCompleted: (data) => {
      router.push("/lessons");
    },
    onError: (err) => {
      alert("Login fail!");
    },
  });

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input {...register("username", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.username && (
          <div className={styles.warningUserName}>
            <span>This field is required</span>
          </div>
        )}
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
