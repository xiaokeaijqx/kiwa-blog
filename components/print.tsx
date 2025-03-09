
interface PrinterProps {
    printerInfo: string;
}

export const Printer = ({printerInfo} : PrinterProps) => {
    return (
        <div >
            <h3 className={"block text-4xl my-4 font-bold leading-[4rem]"}>
                {printerInfo}
            </h3>
        </div>
    )
}