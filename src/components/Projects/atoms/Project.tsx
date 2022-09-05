import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type ProjectProps = {
  className: string;
  src: string;
  alt: string;
  imgClass: string;
  btnClass: string;
};
const Project = ({ className, src, alt, imgClass, btnClass }: ProjectProps) => {
  return (
    <div className={className}>
      <img className={imgClass} src={src} alt={alt} />
      <div className={btnClass}>
        <a href="#">
          <FontAwesomeIcon icon={faEye} /> Preview
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
      </div>
    </div>
  );
};

export default Project;
