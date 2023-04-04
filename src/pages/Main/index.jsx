import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <Link to="/signup">회원가입</Link>
      <Link to="/signin">로그인</Link>
    </div>
  );
}
