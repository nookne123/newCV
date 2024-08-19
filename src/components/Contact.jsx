import React, {useEffect, useState} from "react";
import "../styles/Contact.css";

function Contact({handleSetSection}) {
  const [cardOrder, setCardOrder] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCardOrder((prevOrder) => {
        const newOrder = [...prevOrder];
        newOrder.push(newOrder.shift()); // สลับตำแหน่งการ์ด
        return newOrder;
      });
    }, 3000); // สลับการ์ดทุกๆ 3 วินาที

    return () => clearInterval(intervalId);
  }, []);

  const cards = [
    {value: "2.5", label: "Experience"},
    {value: "300%", label: "Fast learning"},
    {value: "23", label: "years old"},
    {value: "1000%", label: "Badminton Lover"},
  ];
  return (
    <section id="contact" className="pt-[60px] h-auto flex flex-col justify-center overflow-y-auto">
      <div className="relative mb-10 flex flex-col items-center">
        <h1 className="text-[40px] md:text-[50px] font-bold flex justify-center relative z-10 mb-8">
          Contact Me
        </h1>
        <div
          className="absolute inset-0 flex justify-center text-[14vw] md:text-[7vw] text-gray-500 opacity-15 -top-8 font-extrabold z-0">
          Contact
        </div>
        <p
          className="text-[14px] md:text-[16px] mb-[40px] md:mb-[60px] z-10 text-gray-400 w-11/12 md:w-3/4 text-center">
          "Wherever I am in the world, if you need my work, I'll conjure it up and deliver it straight to your
          doorstep."
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 md:w-3/4 mx-auto">
        <div className="flex flex-col gap-8 items-center">
          <img
            width="80" height="80"
            className="bg-zinc-900 rounded-full p-4 hover:scale-125 duration-300"
            src="https://img.icons8.com/fluency-systems-filled/128/FAB005/order-delivered.png"
            alt="address"
          />
          <div className="font-bold text-center">ADDRESS</div>
          <div className="w-4/5 text-gray-600 text-center">
            1077/48 Sukhumvit 101/1 Road, Bang Chak, Phra Khanong, Bangkok 10260, Thailand
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center">
          <img
            width="80" height="80"
            className="bg-zinc-900 rounded-full p-4 hover:scale-125 duration-300"
            src="https://img.icons8.com/sf-black/128/FAB005/phone-disconnected.png"
            alt="phone"
          />
          <div className="font-bold text-center">Contact Number</div>
          <div className="w-4/5 text-gray-600 text-center">091-027-8842</div>
        </div>

        <div className="flex flex-col gap-8 items-center">
          <img
            width="80" height="80"
            className="bg-zinc-900 rounded-full p-4 hover:scale-125 duration-300"
            src="https://img.icons8.com/pulsar-line/128/FAB005/line-me.png"
            alt="line"
          />
          <div className="font-bold text-center">LINE</div>
          <div className="w-4/5 text-gray-600 text-center">nookne123</div>
        </div>

        <div className="flex flex-col gap-8 items-center">
          <img
            width="80" height="80"
            className="bg-zinc-900 rounded-full p-4 hover:scale-125 duration-300"
            src="https://img.icons8.com/pulsar-line/128/FAB005/mail.png"
            alt="email"
          />
          <div className="font-bold text-center">EMAIL</div>
          <div className="w-4/5 text-gray-600 text-center">surawuttiankam.2001@gmail.com</div>
        </div>
      </div>

      <div className="relative mt-[150px]">
        <div className="card-container flex justify-center w-full px-[100px] gap-8 absolute -top-[60px]">
          {cardOrder.map((index) => (
            <div
              key={index}
              className="card flex flex-col bg-stone-900 w-[200px] py-5 gap-3 rounded-xl justify-center text-center"
            >
              <div className="text-[24px] text-yellow-500">{cards[index].value}</div>
              <div className="text-[18px]">{cards[index].label}</div>
            </div>
          ))}
        </div>
        <img
          className="w-full h-[400px] object-cover"
          src="/images/view_1.jpg"
          alt="view"
        />
        <div className="absolute flex flex-col items-center justify-center inset-0 gap-4 ">
          <div className="flex gap-2 text-[40px] font-bold">
            <div>I'm</div>
            <div className="text-yellow-500">Available</div>
            <div>for Developer</div>
          </div>
          <div className="text-slate-300">"I'm ready for new challenges! I'm a fiery youth with flexibility and
            adaptability to match."
          </div>
        </div>
      </div>
      <div
        className="lg:grid grid-cols-1 md:grid-cols-2 hidden lg:grid-cols-4 lg:gap-8 px-4 xl:px-0 w-full  xl:w-4/5 mx-auto mt-[60px] md:mt-[120px]">
        <div>
          <div className="font-bold text-xl mb-4 md:mb-10">About</div>
          <div className="flex flex-col justify-between">
            <div className="text-gray-600">
              Wherever I am in the world, if you need my work, I'll conjure it up and deliver it straight to your
              doorstep.
            </div>
          </div>
        </div>

        <div>
          <div className="font-bold text-xl mb-4 md:mb-10">Links</div>
          <div className="text-gray-600 flex flex-col gap-2">
            <div className="hover:cursor-pointer" onClick={() => handleSetSection("home")}>➜ Home</div>
            <div className="hover:cursor-pointer" onClick={() => handleSetSection("about")}>➜ About</div>
            <div className="hover:cursor-pointer" onClick={() => handleSetSection("resume")}>➜ Resume</div>
            <div className="hover:cursor-pointer" onClick={() => handleSetSection("skills")}>➜ Skills</div>
            <div className="hover:cursor-pointer" onClick={() => handleSetSection("project")}>➜ Project</div>
            <div className="hover:cursor-pointer" onClick={() => handleSetSection("contact")}>➜ Contact</div>
          </div>
        </div>

        <div>
          <div className="font-bold text-xl mb-4 md:mb-10">Services</div>
          <div className="text-gray-600 flex flex-col gap-2">
            <div className="hover:cursor-pointer" onClick={() => handleSetSection("skill")}>➜ Front-end Developer</div>
            <div className="hover:cursor-pointer" onClick={() => handleSetSection("skill")}>➜ Back-end Developer</div>
            <div className="hover:cursor-pointer" onClick={() => handleSetSection("skill")}>➜ Full-stack Developer</div>
          </div>
        </div>

        <div>
          <div className="font-bold text-xl mb-4 md:mb-10">Have a Questions?</div>
          <div className="text-gray-600 flex flex-col gap-2">
            <div className="flex gap-4 mb-4">
              <img className="w-8 h-8 object-cover"
                   src="https://img.icons8.com/fluency-systems-filled/128/FAB005/order-delivered.png" alt="address"/>
              <div>1077/48 Sukhumvit 101/1 Road, Bang Chak, Phra Khanong, Bangkok 10260, Thailand</div>
            </div>
            <div className="flex gap-4 mb-4">
              <img className="w-8 h-8 object-cover"
                   src="https://img.icons8.com/sf-black/128/FAB005/phone-disconnected.png" alt="phone"/>
              <div>091-0278842</div>
            </div>
            <div className="flex gap-4 mb-4">
              <img className="w-8 h-8 object-cover" src="https://img.icons8.com/pulsar-line/128/FAB005/line-me.png"
                   alt="line"/>
              <div>nookne123</div>
            </div>
            <div className="flex gap-4 mb-4">
              <img className="w-8 h-8 object-cover" src="https://img.icons8.com/pulsar-line/128/FAB005/mail.png"
                   alt="mail"/>
              <div className="break-all">surawuttiankam.2001@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-600 gap-2 my-[80px] flex justify-center w-full">
        😊 This may not be @ grand story of mine,but I give my all in everything ❤️ I do.
      </div>
    </section>
  );
}

export default Contact;
