import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"


const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon  className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Embark on your fitness journey with us, where cutting-edge facilities pave the way for your ultimate transformation."
    },
    {
        icon: <UserGroupIcon  className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: "We offer an impressive array of hundreds of diverse classes, providing you with abundant choices to suit your preferences and empower your fitness journey."
    },
    {
        icon: <AcademicCapIcon  className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "Realize your fitness aspirations and nurture your well-being with the guidance of our skilled pro trainers, dedicated to helping you achieve your desired physique and fostering a healthier, more vibrant you."
    },
];

const container = {
    hidden: {},
    visible:  {
        transition: {staggerChildren: 0.2 }
    },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            className="mx-auto w-5/6 items-center justify-center md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            { /* Header */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                    hidden: { opacity: 0, x:-50 },
                    visible: { opacity: 1, x: 0 }
                }}  
            >
                <HText> MORE THAN JUST A GYM </HText>

                <p className="my-5 text-sm">
                    Indulge in a realm of unparalleled fitness excellence with our array of top-tier equipment, invigorating classes led by seasoned instructors, and dedicated trainers. 
                    Your path to the body you've always envisioned is our unwavering commitment. 
                    Every member holds a special place in our heart, and we are devoted to crafting your aspirations into tangible achievements.
                </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
                className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                {benefits.map( (benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
            {/* Graphics and Description */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* Graphic */}
                <img
                    className="mx-auto"
                    alt="benefits-page-graphic"
                    src={BenefitsPageGraphic}

                />

                {/* Description */}
                <div>
                    {/* Title */ }
                        <div
                            className="relative"
                        >
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <div>
                                    <motion.div
                                        className="md:my-5 md:w-3/5"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{once: true, amount: 0.5 }}
                                        transition={{ duration: 1 }}
                                        variants={{
                                            hidden: { opacity: 0, x:50 },
                                            visible: { opacity: 1, x: 0 }
                                        }}  
                                    >
                                        <HText>
                                            MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                            <span className="text-primary-500">FIT</span>
                                        </HText>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    {/* Description */ }
                        <motion.div
                            className="md:my-5 md:w-3/5"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 }
                            }}  
                        >
                            <p className="my-5">
                                In the heart of our gym's vibrant community, millions have embarked on transformative fitness journeys, sculpting their bodies and revitalizing their lifestyles. 
                                With each workout, a growing wave of individuals discovers the path to vitality, making their health and well-being a top priority, all under the guidance of our dedicated trainers and state-of-the-art facilities.
                            </p>
                            <p className="mb-5">
                                This collective commitment to wellness fosters an atmosphere of camaraderie and achievement, where success stories of weight loss, strength gains, and improved overall health echo through our walls.
                                As millions continue to embrace the invigorating spirit of our gym, we stand firm in our mission to empower every member to surpass their fitness goals and rewrite their personal narratives, one inspiring achievement at a time.
                            </p>
                        </motion.div>
                    {/* Button */ }
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits;