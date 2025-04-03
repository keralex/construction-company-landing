function FeatureItem({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center space-y-2">
      <div className="bg-primary-100 p-4 rounded-full">
        <Icon className="h-8 w-8 text-primary-600" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  )
}

export default FeatureItem

