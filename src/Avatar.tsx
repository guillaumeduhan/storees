import { useEffect, useState } from "react";

export interface AvatarProps {
  avatarUrl?: string,
  color?: string,
  gradient?: string,
  name?: string,
  seen?: boolean,
  status?: boolean,
  small?: boolean,
}

function Avatar({
  avatarUrl,
  color = "#3b82f6",
  gradient = "linear-gradient(145deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
  name,
  seen,
  status,
  small
}: AvatarProps) {
  const [animation, setAnimation] = useState(false);
  const [show, setShow] = useState(true);

  const getInitials = () => {
    if (avatarUrl) return;
    const INITIALS = "AA"
    if (!name) return INITIALS;
    const words = name.split(" ");
    if (!words) return INITIALS;
    if (words.length === 0) return INITIALS;
    const initials = words.map((word) => {
      if (word[0]) return word[0].toUpperCase()
    });
    return initials.join("");
  };

  const getSize = (isGradient = false) => {
    if (isGradient) return small ? '42px' : '54px'
    return small ? '36px' : '50px'
  }

  useEffect(() => {
    if (!show) {
      setAnimation(false);
    }
  }, [show])

  useEffect(() => {
    if (animation) {
      setTimeout(() => {
        setShow(true);
      }, 250)
    }
  }, [animation])

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {show && <div style={{
        zIndex: 10,
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100vh",
        background: "black"
      }}
        onClick={() => setShow(false)}
      >
        <h1 style={{
          color: "white",
          textAlign: "center",
        }}>
          Hello this is a story
        </h1>
      </div>}
      <div style={{
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        background: !status ? '' : seen ? '#ccc' : gradient,
        padding: '3px',
        width: getSize(true),
        height: getSize(true),
        borderRadius: getSize(true),
      }}>
        <div style={{
          zIndex: animation ? 2 : -1,
          position: "absolute",
          width: getSize(true),
          height: getSize(true),
          background: "black",
          borderRadius: "100px",
        }}
          onClick={() => setAnimation(!animation)}
          className={animation ? "grow-fast" : ""}
        />
        <div style={{
          zIndex: 1,
          backgroundImage: `url(${avatarUrl})`,
          border: '2px solid white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: '700',
          width: getSize(),
          height: getSize(),
          borderRadius: getSize(),
          backgroundColor: color,
          cursor: 'pointer',
          backgroundSize: 'cover'
        }}
          onClick={() => setAnimation(!animation)}
        >
          {getInitials()}
        </div>
      </div>
    </div>
  )
}
export default Avatar
