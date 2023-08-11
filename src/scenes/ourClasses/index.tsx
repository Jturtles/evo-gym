import { SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { ClassType } from "@/shared/types";
import Class from  "./class";

const classes: Array<ClassType> = [
    {
        name: "Strength Classes",
        description: "Unleash your inner powerhouse with our Strength classes. These sessions are tailored to sculpt and fortify your muscles through a dynamic blend of weightlifting and resistance training. Get ready to witness tangible gains in strength and definition as you conquer new challenges and reach your fitness peaks.",
        image: image1,
    },
    {
        name: "Fitness Classes",
        description: "Elevate your fitness journey with our diverse Fitness classes. From high-intensity interval training (HIIT) to functional workouts, these sessions provide a holistic approach to cardiovascular health, muscle toning, and endurance enhancement. Join us to experience invigorating routines that bring your fitness goals within reach.",
        image: image2,
    },
    {
        name: "Dance Classes",
        description: "Let the rhythm move you in our Dance classes. These high-energy sessions combine cardio with expressive dance moves, offering a fun and engaging way to burn calories while boosting coordination and confidence. Join our dance community and dance your way to a healthier you.",
        image: image3,
    },
    {
        name: "Yoga Classes",
        description: "Find your inner balance and flexibility in our Yoga classes. These sessions focus on harmonizing mind and body through gentle poses, controlled breathing, and meditation. Whether you're a beginner or experienced yogi, our yoga classes offer a serene escape from the hustle of everyday life.",
        image: image4,
    },
    {
        name: "Cardio Classes",
        description: "Ignite your cardiovascular fitness in our Cardio classes. Designed to get your heart pumping and your energy soaring, these sessions encompass a variety of heart-pounding exercises that enhance endurance and melt away calories. Join us to elevate your fitness level while enjoying the camaraderie of fellow participants.",
        image: image5,
    },
    {
        name: "Calisthenics Classes",
        description: "Explore the world of bodyweight mastery in our Calisthenics classes. Using your own body as resistance, these workouts target strength, agility, and functional fitness. Discover the art of controlled movements, progressions, and advanced techniques that redefine your physical capabilities.",
        image: image6,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                    hidden: { opacity: 0, x:-50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <div className="md:w-3/5">
                    <HText>
                        OUR CLASSES
                    </HText>
                    <p className="py-5">
                        With an expansive selection of diverse classes spanning from high-intensity cardio to mind-soothing yoga, our gym offers an inclusive space for everyone to discover their ideal fitness path. 
                        This comprehensive range not only tailors workouts to individual preferences but also fosters a sense of belonging within specialized communities of like-minded individuals. 
                        As members engage in these classes, they not only shape their bodies but also form connections that fuel motivation and sustain lifelong health transformations.
                    </p>
                </div>
            </motion.div>
                <div className="mt-10 h-[353] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item: ClassType ,index) => (
                            <Class
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
        </motion.div>
    </section>
  )
}

export default OurClasses;