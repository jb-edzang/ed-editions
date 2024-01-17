import { format } from "date-fns";

const Footer = () => {
  const time = format(new Date(), "yyyy");

  return (
    <footer className="bg-gray-100 fixed bottom-0 w-full">
      <div className="flex px-4 py-4 m-2">
        <div className="flex-1 pr-4 border-r">
          <div className="pl-2">
            <h4 className="text-lg font-semibold">About</h4>
            <p className="text-sm">Lorem ipsum</p>
          </div>
        </div>
        <div className="flex-1 pr-4 border-r">
          <div className="pl-2">
            <h4 className="text-lg font-semibold">Contact</h4>
            <p className="text-sm">Lorem ipsum</p>
          </div>
        </div>
        <div className="flex-1 pr-4 border-r">
          <div className="pl-2">
            <h4 className="text-lg font-semibold">Terms</h4>
            <p className="text-sm">Lorem ipsum</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="pl-2">
            <h4 className="text-lg font-semibold">Policy</h4>
            <p className="text-sm">Lorem ipsum</p>
          </div>
        </div>
      </div>
      <div className="px-2 py-2 text-center">
        <p className="text-xs">
          &copy; {time} | Tous droits réservés | EMPREINTES & DIGITALES
        </p>
      </div>
    </footer>
  );
};

export default Footer;
