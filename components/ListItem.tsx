"use client";

import { useRouter } from "next/navigation";

interface ListItemProps {
  image: string;
  name: string;
  href: string;

}

const ListItem: React.FC<ListItemProps> = (
  {
    image,
    name,
    href,
  }) => {
    const router = useRouter();

    const onClick = () => {
      // add authentication before push
      router.push(href)
    }


  return (
    <div>
      <button className="
      relative
      group
      flex
      item-center
      rounded-md
      overflow-hidden
      gap-x-4
      bg-neutral-100/10
      hover:bg-neutral-100/20
      transition
      pr-4
      ">
        
      </button>
    </div>
  )

};
export default ListItem;
