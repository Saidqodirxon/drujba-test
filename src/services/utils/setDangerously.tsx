import React from "react";

type Props = {
  html: string;
  className?: string;
};

export const SetDangerously: React.FC<Props> = ({ html, className }) => {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
};
