export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Biswajit Padhan. All rights reserved.</p>
          <p>
            Built with <span className="text-primary">React</span> & <span className="text-primary">Vite</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
