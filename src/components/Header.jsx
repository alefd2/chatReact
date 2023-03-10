import "./header.css";
import { X } from "phosphor-react";
import { addDays, format, formatRelative, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export const Header = () => {
  return (
    <>
      <header>
        <div className="main">
          <div className="wrapperProfile">
            <div className="profile">
              <img src="https://github.com/alefd2.png" alt="" />
            </div>
            <div className="title-profile">
              <strong>Alef Lima</strong>
              <div className="status">
                <div className="circle" />
                <div>Online</div>
              </div>
            </div>
          </div>
          <button>
            <X size={30} color="white" />
          </button>
        </div>

        <div>
          <div>
            {formatRelative(addDays(new Date(), 0), new Date(), {
              locale: ptBR,
            })}
          </div>
        </div>
      </header>
    </>
  );
};
