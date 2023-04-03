export const IconPhantom = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <linearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1="12"
      x2="12"
      y1="4"
      y2="20"
    >
      <stop offset="0" stopColor="#534bb1" />
      <stop offset="1" stopColor="#551bf9" />
    </linearGradient>
    <linearGradient
      id="b"
      gradientUnits="userSpaceOnUse"
      x1="12"
      x2="12"
      y1="7"
      y2="17"
    >
      <stop offset="0" stopColor="#fff" />
      <stop offset="1" stopColor="#fff" stop-opacity=".82" />
    </linearGradient>
    <path
      d="m12 20c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8z"
      fill="url(#a)"
    />
    <path
      d="m17.2941 11.9311h-1.3436c0-2.72345-2.2274-4.9311-4.9754-4.9311-2.71381 0-4.92022 2.1536-4.97422 4.8304-.05587 2.7669 2.56334 5.1696 5.35552 5.1696h.3512c2.4616 0 5.7609-1.9098 6.2764-4.2368.0952-.4289-.2467-.8321-.6899-.8321zm-8.3156.1213c0 .3642-.30055.662-.66801.662-.36747 0-.66801-.298-.66801-.662v-1.0711c0-.3641.30054-.662.66801-.662.36746 0 .66801.2979.66801.662zm2.3196 0c0 .3642-.3005.662-.668.662s-.668-.298-.668-.662v-1.0711c0-.3641.3006-.662.668-.662.3675 0 .668.2979.668.662z"
      fill="url(#b)"
    />{' '}
  </svg>
);

export default IconPhantom;
