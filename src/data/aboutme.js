import avatar from "../assets/avatar.jpg";
import avatar2 from "../assets/avatar2.jpg";

const aboutmeInfo = {
  title: "about me",
  subtitle: "읽기 쉬운 코드를 작성하자",
  avatar: [avatar, avatar2],
  private: {
    name: "Hwa Ji In",
    birth: "1995.10.02",
    address: "경상남도 진주시",
    favorite: ["하이큐", "k-pop", "돼지국밥"],
  },
  education: [
    {
      year: "2021.01 - ",
      info: "프로그래밍 독학",
    },
    {
      year: "2014.03 - 2020.02",
      info: "부산대학교 경영학과",
    },
  ],
  values: [
    {
      icon: "",
      info: "유지 보수가 쉬운 코드",
    },
    {
      icon: "",
      info: "재활용성이 높은 코드",
    },
    {
      icon: "",
      info: "소통에 적극적인 자세",
    },
  ],
};

export default aboutmeInfo;
