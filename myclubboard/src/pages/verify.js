import Loading from "@/components/General/Loading";
import { Logo } from "@/components/Landing Page/Heading";
import { MainLayout } from "@/components/Layout/layout";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";

const verify = () => {
  const { user } = useUser();
  const [isVerified, setIsVerified] = useState(false);
  const [clubId, setClubId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const verifyUSer = async () => {
    setIsLoading(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lead/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user?.emailAddresses[0].emailAddress,
      }),
    });
    const data = await res.json();
    setClubId(data);
    if (data.error) {
      setIsVerified(false);
      setIsLoading(false);
      return;
    } else {
      setIsVerified(true);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (user?.emailAddresses[0].emailAddress) {
      verifyUSer();
    }
  }, [user?.emailAddresses[0].emailAddress]);
  return (
    <MainLayout>
      <div className="w-full flex items-center">
        <Logo />
        <div className="ml-auto">
          <UserButton />
        </div>
      </div>
      <h1 className="text-xl font-semibold md:text-2xl">
        Checking if user is a club lead
      </h1>
      {isVerified ? (
        <>
          <h1 className="text-lg md:text-2xl font-bold text-emerald-500">
            Verified
          </h1>
          <Link className="text-xl apply-btn" href={`/lead/${clubId}`}>
            Continue
          </Link>
        </>
      ) : (
        <>
          {isLoading ? (
            <>
              <Loading />
            </>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <p className="mx-4 text-center mt:4 error-msg font-normal text-lg md:text-2xl">
                Email{" "}
                <span className="font-bold border-red-500">
                  {user?.emailAddresses[0].emailAddress}
                </span>{" "}
                has not been added as club lead, please contact your club admin
                to add your email
              </p>
              <Link className="text-xl apply-btn" href="/">
                Back to home
              </Link>
              <Link className="text-xl apply-btn" href="/instruction">
                Instruction to add email
              </Link>
            </div>
          )}
        </>
      )}
    </MainLayout>
  );
};

export default verify;
