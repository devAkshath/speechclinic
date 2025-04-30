"use client";

import Link from "next/link";
import "./ServiceOption.css";

type ButtonItem = {
  label: string;
  link: string;
};

type ServiceButtonsProps = {
  title: string;
  buttons: ButtonItem[];
};

const ServiceButtons = ({ title, buttons }: ServiceButtonsProps) => {
  return (
    <div className="w-full md:w-1/4 border">
      <h2 className="text-2xl font-bold mb-3 text-gray-800">{title}</h2>
      <div className="w-9 h-[5px] bg-pink-500 rounded-full mb-4"></div>
      <div className="flex flex-col gap-2">
        {buttons.map((btn, idx) => (
          <Link key={idx} href={btn.link}>
            <button className="custom-button w-full text-left">{btn.label}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceButtons;
