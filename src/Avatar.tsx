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

  return (
    <div style={{
      background: !status ? '' : seen ? '#ccc' : gradient,
      padding: '3px',
      width: getSize(true),
      height: getSize(true),
      borderRadius: getSize(true),
    }}>
      <div style={{
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
      }} onClick={() => alert("hello")}>
        {getInitials()}
      </div>
    </div>
  )
}
export default Avatar
