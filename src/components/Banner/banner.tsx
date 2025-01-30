export function Banner() {
  return (
    <div className="relative w-full py-12 md:py-16 lg:py-20 border-b">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4">
            AUZBIZ CONSULTING
          </h1>
          <div className="mx-auto h-0.5 w-32 bg-primary mb-4" />
          <p className="text-sm md:text-base lg:text-xl max-w-3xl mx-auto">
            We provide mission-critical IT services that transform Governments and Enterprise
            Clients.
          </p>
        </div>
      </div>
    </div>
  )
}
