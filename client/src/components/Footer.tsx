export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} Albi Yzo. All rights reserved.</p>
          </div>
          <div className="text-sm text-background/80">
            <p>Designed by EAI DEV</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
