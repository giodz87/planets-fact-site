import Planet from "./Planet";
import Header from "../components/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/mercury");
  }, []);
  return <></>;
}
