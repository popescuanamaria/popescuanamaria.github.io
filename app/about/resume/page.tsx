"use client";

export default function Resume() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-center w-full sm:max-w-4xl pt-5 pb-20 gap-y-10">
        <div className="flex sm:justify-start w-full">
          <div className="flex flex-col items-end pl-3 pr-3 w-3/4 border-r-2 border-[#888888] border-opacity-50 sm:w-1/2">
            <div className="uppercase font-normal text-lg">contact</div>
            <br></br>
            <div className="font-thin text-lg">(+45) 12 34 56 78</div>
            <div className="font-thin text-lg">
              popescu.anamaria93@gmail.com
            </div>
            <div className="font-thin text-lg">Copenhagen</div>
          </div>
        </div>

        <div className="flex justify-end w-full">
          <div className="flex flex-col items-start pl-3 pr-3 w-3/4 border-l-2 border-[#888888] border-opacity-50 sm:w-1/2">
            <div className="uppercase font-normal text-lg">Education</div>
            <br></br>
            <div className="font-thin text-lg">Bachelor of SCIENCE</div>
            <div className="font-thin text-lg">Computer Science</div>
            <div className="font-thin text-lg">
              Politehnica University Timisoara
            </div>
            <div className="font-normal text-lg opacity-70">2011 - 2015</div>
          </div>
        </div>

        <div className="flex justify-start w-full">
          <div className="flex flex-col items-end pl-6 pr-3 w-3/4 border-r-2 border-[#888888] border-opacity-50 sm:w-1/2">
            <div className="uppercase font-normal text-lg">Experience</div>
            <br></br>
            <div className="uppercase font-normal text-lg opacity-70 pb-3">
              Software developer intern
            </div>
            <div className="font-normal text-lg pb-3">Movidius</div>
            <div className="font-normal text-lg opacity-70 pb-3">
              June 2013 - Octomber 2013
            </div>
            <ul className="list-disc">
              <li>
                Participated in an HDR project utilizing a designated image
                sensor. The objective was to achieve the highest-quality image,
                and my responsibilities included conducting research and
                analyzing outcomes in various scenarios. This involved
                incorporating new implementations for different filters in the
                pipeline, adjusting parameters, and more.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end w-full">
          <div className="flex flex-col items-start pl-6 pr-3 w-3/4 border-l-2 border-[#888888] border-opacity-50 sm:w-1/2">
            <div className="uppercase font-normal text-lg opacity-70 pb-3">
              Software developer
            </div>
            <div className="font-normal text-lg pb-3">Movidius</div>
            <div className="font-normal text-lg opacity-70 pb-3">
              Octomber 2013 - November 2016
            </div>
            <ul className="list-disc">
              <li>
                Developed diverse image processing filters in C and optimized
                them using assembly language for our Movidius proprietary
                processor.
              </li>
              <li>
                Collaborated closely with the support team to enhance projects
                for diverse clients, incorporating new filters and optimizing
                code in assembly language. Additionally, provided on-site
                support for clients, ensuring seamless integration and optimal
                performance of the implemented enhancements.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-start w-full">
          <div className="flex flex-col items-end pl-6 pr-2 w-3/4 border-r-2 border-[#888888] border-opacity-50 sm:w-1/2">
            <div className="uppercase font-normal text-lg opacity-70 pb-3">
              Software Engineer
            </div>
            <div className="font-normal text-lg pb-3">Intel Corporation</div>
            <div className="font-normal text-lg opacity-70 pb-3">
              November 2016 - Present
            </div>
            <ul className="list-disc">
              <li>
                Engineered a C++ model designed to simulate a dedicated CNN
                (Convolutional Neural Network) hardware block for verification
                purposes, with a specific emphasis on byte-level transactions.
                The model was required to simulate each sub-block, along with
                handling transactions between sub-blocks and interactions
                between memory and the CNN unit.
              </li>
              <li>
                Integrated various computer vision hardware blocks into our
                proprietary architecture, enhancing existing blocks with
                additional features (e.g. Stereo, Matrix Multiplication, Event
                Processing Unit). Conducted low-level verification using
                SystemVerilog.
              </li>
              <li>
                Extended our Python and C++ compiler for CNN models with new
                operations. Integrated an arithmetic emulator for reference
                result validation and utilized the compiler to generate diverse
                datasets for power and performance measurements on a specific
                neural network hardware block.
              </li>
              <li>
                Actively mentored junior engineers across a wide spectrum of
                tasks, including technical onboarding, coding and debugging.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end w-full">
          <div className="flex flex-col items-start pl-6 pr-2 w-3/4 border-l-2 border-[#888888] border-opacity-50 sm:w-1/2">
            <div className="uppercase font-normal text-lg">
              Technical skills
            </div>
            <br></br>
            <ul className="list-disc">
              <li>
                Programming languages: C, C++, Python, Verilog, Assembly
                language
              </li>
              <li>Version control: Git, SVN</li>
              <li>Deep Learning frameworks: TensorFlow, PyTorch</li>
              <li>Algorithm development and optimization</li>
              <li>Agile methodologies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
