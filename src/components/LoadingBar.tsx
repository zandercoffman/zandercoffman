export default function LoadingBar() { return <div className="fixed inset-0 flex items-center justify-center">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 rounded-full border-4 border-black/20 dark:border-white/20 border-t-black dark:border-t-white animate-spin" />
    </div>
  </div>}