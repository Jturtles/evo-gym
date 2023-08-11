import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer
        className="bg-primary-100 py-16"
    >
        <div
            className="justify-content mx-auto w-5/6 gap-16 md:flex"
        >
            <div>
                <img alt='logo' src={Logo}/>
                <p className="my-5">
                    Elevate your fitness experience with us and embrace a path of wellness and strength. Join our community today and start your journey toward a healthier, happier you.
                </p>
                <p>
                    © Evogym All Rights Reserved.
                </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Twitter @EVOGYM</p>
                <p className="my-5">Instagram @EVO_GYM</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Evo Gym</p>
                <p>(617) 342-2312</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer;