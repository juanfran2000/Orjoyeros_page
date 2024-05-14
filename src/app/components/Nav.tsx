type Props = {
  title: string;
};

export default function Nav({ title }: Props) {
  return (
    <div>
      <div className="px-8 md:px-24 py-6">
        <a className=" text-md font-bold text-xl" href="/">
          {title}
        </a>
      </div>
      <hr className="border-zinc-400" />
    </div>
  );
}
