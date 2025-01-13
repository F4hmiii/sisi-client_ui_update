import Card from "../Elements/Card"

const GoalsFragment = () => {
    return (
        <>
        {/* top content start*/}
      <h1 className="text-xl text-gray-700">Goals</h1>
      <div className="mb-8 sm:flex sm:gap-6 sm: items-stretch">
        <div className="sm:w-full" style={{flexShrink: 2}}>
          <Card titleCard="Saving Goals" variant="h-full">Ini Content Saving Goals</Card>
        </div>
        <div className="sm:w-full" style={{flexShrink: 1}}>
          <Card titleCard="Saving Summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti, dolorum doloribus libero eaque praesentium voluptatum nihil temporibus dicta earum esse a consequatur distinctio tempora optio aspernatur cumque. Quis, modi!</Card>
        </div>
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <h1 className="text-xl text-gray-700">Expenses Goals by Category</h1>
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
          <Card variant="h-full"></Card>
        </div>
        <div className="sm:w-1/3">
          <Card variant="h-full"></Card>
        </div>
        <div className="sm:w-1/3">
          <Card variant="h-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim praesentium possimus incidunt sunt illum rerum consequuntur laboriosam sapiente, fugiat sequi cupiditate suscipit minima, dolorum ullam libero, dolorem doloremque ad blanditiis!</Card>
        </div>
      </div>
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
          <Card variant="h-full"></Card>
        </div>
        <div className="sm:w-1/3">
          <Card variant="h-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim praesentium possimus incidunt sunt illum rerum consequuntur laboriosam sapiente, fugiat sequi cupiditate suscipit minima, dolorum ullam libero, dolorem doloremque ad blanditiis!</Card>
        </div>
        <div className="sm:w-1/3">
          <Card variant="h-full"></Card>
        </div>
      </div>
      {/* bottom content end*/}
        </>
    )
}

export default GoalsFragment