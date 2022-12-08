import ReactDOM from "react-dom";
import moduleHOC from '@integration/moduleHOC';
import CompTest from '@/components/pages/TestComp';

declare global {
    interface Window {
        moduleTest: any,
    }
}

const TestModule = moduleHOC(CompTest)

function moduleTest(this: any, id: string, data: any, config: object) {
    this.render = () => {
        ReactDOM.render(
            <div>
                <TestModule data={data} config={config} />
            </div>,
            document.getElementById(id)
        );
    }
}

window.moduleTest = moduleTest;