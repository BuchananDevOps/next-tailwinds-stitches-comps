import { CSS, styled } from "@/theme/stitches.config"

export interface IconProps {
  fill?: string
  filled?: boolean
  size?: string | number
  height?: string | number
  width?: string | number
  label?: string
  onClick?: () => void
  className?: string
  css?: CSS
}

export const Icon = styled("svg", {})

export { default as Home } from "./home"
export { default as Anecdote } from "./anecdote"
export { default as Anchor } from "./anchor"
export { default as Activity } from "./activity"
export { default as At } from "./at" // @ symbol
export { default as Camera } from "./camera"
export { default as ChevronLeft } from "./chevron-left"
export { default as ChevronRight } from "./chevron-right"
export { default as ChevronDown } from "./chevron-down"
export { default as ArrowLeft } from "./arrow-left"
export { default as ArrowRight } from "./arrow-right"
export { default as Copy } from "./copy"
export { default as DiamondUpsideDown } from "./diamond-upside-down"
export { default as Phone } from "./phone"
export { default as Lock } from "./lock"
export { default as Unlock } from "./unlock"
export { default as Moon } from "./moon"
export { default as Notification } from "./notification"
export { default as Sun } from "./sun"
export { default as UserIcon } from "./user"
export { default as VolumeUp } from "./volume-up"
export { default as Heart } from "./heart"
export { default as Bug } from "./bug"
export { default as Microphone } from "./microphone"
export { default as MicrophoneOff } from "./microphone-off"
export { default as Video } from "./video"
export { default as VideoOff } from "./video-off"
export { default as Search } from "./search"
export { default as Hash } from "./hash"
export { default as CodeDocument } from "./code-document"
export { default as SearchByAlgolia } from "./search-by-algolia"
export { default as Close } from "./close"
export { default as Twitter } from "./twitter"
export { default as LinkedIn } from "./linkedin"
export { default as Discord } from "./discord"
export { default as Github } from "./github"
export { default as Send } from "./send"
export { default as Mail } from "./mail"
export { default as Password } from "./password"
export { default as Palette } from "./palette"
export { default as Note } from "./note"
export { default as Plus } from "./plus"
export { default as Minus } from "./minus"
export { default as Magic } from "./magic"
export { default as MapMarker } from "./map-marker"
export { default as Flash } from "./flash"
export { default as Devices } from "./devices"
export { default as Play } from "./play"
export { default as Rewind5s } from "./rewind5s"
export { default as Forward5s } from "./forward5s"
export { default as NextTrack } from "./next-track"
export { default as PreviousTrack } from "./previous-track"
export { default as GamingConsole } from "./gaming-console"
export { default as Star } from "./star"
export { default as Server } from "./server"
export { default as TagUser } from "./tag-user"
export { default as RoundPointer } from "./round-pointer"
export { default as Maximize } from "./maximize"
export { default as HtmlLogo } from "./html-logo"
export { default as NextJsLogo } from "./nextjs-logo"
export { default as VercelLogo } from "./vercel"
export { default as TypescriptLogo } from "./typescript"
export { default as JavascriptLogo } from "./javascript"
export { default as Scale } from "./scale"
export { default as Sparkle } from "./sparkle"
export { default as View } from "./view"
export { default as Infinity } from "./infinity"
export { default as Submit } from "./submit"
