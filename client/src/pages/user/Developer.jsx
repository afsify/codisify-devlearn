import { Progress, Card } from "antd";
import { motion } from "framer-motion";
import imageLinks from "../../assets/images/imageLinks";
import { getDev } from "../../api/services/userService";
import UserLayout from "../../components/layout/UserLayout";
import {
  MailOutlined,
  GithubOutlined,
  YoutubeOutlined,
  WhatsAppOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import useGet from "../../hooks/useGet";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Developer() {
  const location = useLocation();
  const devId = location?.state?.dev?._id;

  const { data: developer, setArgs } = useGet(getDev, devId);

  useEffect(() => {
    setArgs(devId);
  }, [devId, setArgs]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUpTag = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerTag = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <UserLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="overflow-x-auto rounded-lg shadow-sm shadow-black my-5"
      >
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <h2 className="text-3xl font-semibold mb-4">About</h2>
              <motion.div
                variants={fadeInUp}
                className="flex justify-around mb-6"
              >
                <motion.div
                  variants={fadeInUp}
                  className="rounded-full overflow-hidden w-44 h-44 shadow-md shadow-black"
                >
                  <img
                    src={developer?.user?.image || imageLinks.profile}
                    alt="Account"
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h1 className="text-2xl font-semibold mb-1">
                  {developer?.user?.name}
                </h1>
                <p className="text-gray-500 font-sans mb-1">
                  <a
                    className="me-2 hover:text-blue-500"
                    href={`mailto:${developer?.user?.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MailOutlined />
                  </a>
                  {developer?.user?.email}
                </p>
                <p className="text-gray-500 font-sans max-w-[250px] mb-4">
                  <a
                    className="me-2 hover:text-blue-500"
                    href={`https://www.google.com/maps/search/?api=1&query=${developer?.user?.address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <EnvironmentOutlined />
                  </a>
                  {developer?.user?.address}
                </p>
              </motion.div>
              <h2 className="text-lg font-semibold mb-2">Contact</h2>
              <motion.div
                variants={staggerTag}
                className="flex flex-wrap justify-center md:justify-start items-center gap-5 px-5 min-h-[80px]"
              >
                <motion.a
                  variants={fadeInUpTag}
                  href={
                    developer?.linkedin || "https://linkedin.com/in/example"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:scale-125 duration-300 hover:text-[#0366c3]"
                >
                  <LinkedinOutlined style={{ fontSize: "40px" }} />
                  <p className="hidden text-[9px] text-center group-hover:grid font-semibold font-sans">
                    {/* {getUserId(developer?.linkedIn, "/")} */}
                  </p>
                </motion.a>
                <motion.a
                  variants={fadeInUpTag}
                  href={developer?.github || "https://github.com/example"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:scale-125 duration-300 hover:text-[#9e5eb8]"
                >
                  <GithubOutlined style={{ fontSize: "40px" }} />
                  <p className="hidden text-[9px] text-center group-hover:grid font-semibold font-sans">
                    {/* {getUserId(developer?.github, "/")} */}
                  </p>
                </motion.a>
                <motion.a
                  variants={fadeInUpTag}
                  href={
                    developer?.youtube || "https://www.youtube.com/@example"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:scale-125 duration-300 hover:text-[#ff0000]"
                >
                  <YoutubeOutlined style={{ fontSize: "40px" }} />
                  <p className="hidden text-[9px] text-center group-hover:grid font-semibold font-sans">
                    {/* {getUserId(developer.contact?.youtube, "/")} */}
                  </p>
                </motion.a>
                <motion.a
                  variants={fadeInUpTag}
                  href={developer?.whatsapp || "https://wa.me/1234567890"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:scale-125 duration-300 hover:text-[#119e06]"
                >
                  <WhatsAppOutlined style={{ fontSize: "40px" }} />
                  <a className="hidden text-[5px] text-center group-hover:grid font-semibold font-sans">
                    {/* {getUserId(developer.contact?.whatsapp, "/")} */}
                  </a>
                </motion.a>
                <motion.a
                  variants={fadeInUpTag}
                  href={
                    developer.contact?.instagram ||
                    "https://instagram.com/example"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:scale-125 duration-300 hover:text-[#ea0120]"
                >
                  <InstagramOutlined style={{ fontSize: "40px" }} />
                  <p className="hidden text-[9px] text-center group-hover:grid font-semibold font-sans">
                    {/* {getUserId(developer.contact?.instagram, "/")} */}
                  </p>
                </motion.a>
              </motion.div>
            </div>
            <motion.div variants={fadeInUp} className="md:mt-10">
              <h2 className="text-lg font-semibold mb-2">Education</h2>
              <motion.ul
                variants={fadeInUp}
                className="list-disc ml-6 font-sans"
              >
                {developer.education?.map((edu, index) => (
                  <motion.li key={index} className="mb-2 last:mb-0">
                    {edu.institution} - {edu.course} ({edu.branch}), Graduated
                    in {edu.year}
                  </motion.li>
                ))}
              </motion.ul>
              <h2 className="text-lg font-semibold mt-5 mb-2">Skills</h2>
              <motion.div
                variants={stagger}
                className="flex md:justify-between flex-wrap px-2"
              >
                <motion.ul variants={fadeInUp} className="font-sans space-y-4">
                  {developer.skill
                    ?.slice(0, Math.ceil(developer.skill.length / 2))
                    .map((skill, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUp}
                        className="mb-4 last:mb-0"
                      >
                        <div className="flex items-center">
                          <div className="min-w-[100px]">
                            <p className="font-semibold">{skill.name}</p>
                          </div>
                          <div className="w-56">
                            <Progress
                              percent={skill.proficiency}
                              status="active"
                              width={56}
                            />
                          </div>
                        </div>
                      </motion.li>
                    ))}
                </motion.ul>
                <motion.ul
                  variants={fadeInUp}
                  className="font-sans mt-4 md:mt-0 space-y-4"
                >
                  {developer.skill
                    ?.slice(Math.ceil(developer.skill.length / 2))
                    .map((skill, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUp}
                        className="mb-4 last:mb-0"
                      >
                        <div className="flex items-center">
                          <div className="min-w-[100px]">
                            <p className="font-semibold">{skill.name}</p>
                          </div>
                          <div className="w-56">
                            <Progress
                              percent={skill.proficiency}
                              status="active"
                              width={56}
                            />
                          </div>
                        </div>
                      </motion.li>
                    ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </UserLayout>
  );
}

export default Developer;
