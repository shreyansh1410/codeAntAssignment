export default function StatsCard() {
  return (
    <div className="relative font-sans">
      <div className="bg-white rounded-3xl shadow-[0_4px_10px_2px_rgba(0,0,0,0.1)]   py-6 px-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <img src="/placeholder.svg" alt="CodeAnt AI" className="h-6 w-6" />
            <span className="text-sm font-medium">
              AI to Detect & Autofix Bad Code
            </span>
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <div className="text-center">
            <div className="font-semibold text-xl">30+</div>
            <span className="text-xs text-gray-600">Language Support</span>
          </div>
          <div className="text-center">
            <div className="font-semibold text-xl">10K+</div>
            <div className="text-xs text-gray-600">Developers</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-xl">100K+</div>
            <div className="text-xs text-gray-600">Hours Saved</div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-28 right-4 bg-white rounded-xl shadow-[0_4px_10px_2px_rgba(0,0,0,0.1)] p-4 w-56">
        <div className="flex justify-between gap-4">
          <div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <img src="/piechart.svg" alt="" />
            </div>
            <div>
              <div className="flex justify-between">
                <div className="">
                  <div className="text-sm text-gray-600">Issues Fixed</div>
                  <div className="font-semibold text-xl">500K+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row text-xs mt-1">
            <div className="text-blue-800 font-bold">↑ 14%</div>
            <div className="text-gray-500 ml-1">This week</div>
          </div>
        </div>
      </div>
    </div>
  );
}
