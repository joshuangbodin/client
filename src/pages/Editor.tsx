import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useAuth } from "../context/context";
import { useResumeState } from "../context/ResumeContext";
import { generateResume } from "../libraries/api/resume";

export default function Editor() {
  const { type } = useParams();

  const { user } = useAuth();
  const { resume } = useResumeState();
  useEffect(() => {}, []);
  return <div>{
    }</div>;
}
