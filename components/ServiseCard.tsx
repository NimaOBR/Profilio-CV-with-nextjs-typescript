import React, { FunctionComponent, useState } from "react";
import { Iservis } from "../type";

const ServiseCard: FunctionComponent<{ item: Iservis }> = ({
  item: { Icon, about, title},
}) => {
  const createMarkup = (about:any) => {
    return {
      __html: about,
    };
  };
  const [first, setfirst] = useState<String>(about);
  return (
    <div className="p-2 flex items-center space-x-4  dark:bg-dark-500 h-24">
      <Icon className="text-green-400 w-12 h-12" />
      <div className='tracking-wider'>
        <h4 className="font-bold tracking-widest">{title}</h4>
        {first&&<div dangerouslySetInnerHTML={createMarkup(first)}/>}
      </div>
    </div>
  );
};

export default ServiseCard;
