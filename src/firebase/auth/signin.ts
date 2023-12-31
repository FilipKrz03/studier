"use client";
import { useState } from "react";
import app from "../config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

export default function signIn(emial: string, password: string) {
    const result = signInWithEmailAndPassword(auth, emial, password);
    return result;
}
