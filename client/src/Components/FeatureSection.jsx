import { PaintbrushIcon as PaintBrush, FileCode, FileOutput } from 'lucide-react'

const features = [
  {
    title: "Easy to Use",
    description: "Intuitive interface for effortless portfolio creation",
    icon: PaintBrush,
  },
  {
    title: "Customizable Layouts",
    description: "Flexible templates to match your unique style",
    icon: FileCode,
  },
  {
    title: "Export as PDF",
    description: "Share your portfolio in various formats",
    icon: FileOutput,
  },
]

function FeatureCard({ title, description, Icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Icon className="w-10 h-10 text-purple-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our App?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} Icon={feature.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

