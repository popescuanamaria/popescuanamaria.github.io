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
              June 2013 - September 2013
            </div>
            <ul className="list-disc">
              <li>
                I participated in an HDR project utilising a designated image
                sensor. The objective was to achieve the highest-quality image,
                and my responsibilities included conducting research and
                analysing outcomes in various scenarios. This involved
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
              2013 - 2015
            </div>
            <ul className="list-disc">
              <li>
                Developed diverse image processing filters in C and optimized
                them using assembly language for a particular processor.
                Collaborated with the support team for various clients,
                integrating new filters into their projects and optimizing them
                in assembly language.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-start w-full">
          <div className="flex flex-col items-end pl-6 pr-2 w-3/4 border-r-2 border-[#888888] border-opacity-50 sm:w-1/2">
            <div className="uppercase font-normal text-lg opacity-70 pb-3">
              Software Engineer
            </div>
            <div className="font-normal text-lg pb-3">Movidius / Intel</div>
            <div className="font-normal text-lg opacity-70 pb-3">
              2015 - Present
            </div>
            <ul className="list-disc">
              <li>
                Developed a C++ model designed to simulate a dedicated CNN
                hardware block for verification purposes, with a specific
                emphasis on byte-level transactions.The model was required to
                simulate each sub-block, along with handling transactions
                between sub-blocks and interactions between memory and the CNN
                unit.
              </li>
              <li>
                Incorporated computer vision hardware blocks into a designated
                architecture, enhancing existing blocks with additional
                features. Conducted low-level verification using SystemVerilog.
              </li>
              <li>
                Contributed to a Python and C++ compiler for convolutional
                neural network models, enhancing its capabilities by
                incorporating new operations. Integrated an arithmetic emulator
                for reference result validation and utilized the compiler to
                generate diverse datasets for power and performance measurements
                on a specific neural network hardware block.
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
              <li>
                Deep Learning frameworks: TensorFlow, PyTorch 
              </li>
              <li>
                Algorithm development and optimization
              </li>
              <li>
                Agile methodologies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
