export function InputFieldText({ inputFieldId, inputFieldLabel }:
                               { inputFieldId: string, inputFieldLabel: string }) {
    return (
        <div className="flex flex-col items-start gap-1">
            <label htmlFor={inputFieldId} className="px-3">
                <b>{inputFieldLabel}</b></label>
            <input id={inputFieldId} type="text"
                   className="bg-[#D9D9D9] rounded-2xl p-3 w-80
                     inset-shadow-[0px_-5px_4px_rgba(0,0,0,0.25)]"
            />
        </div>
    );
}

export function InputFieldPassword({ inputFieldLabel }:{ inputFieldLabel: string }) {
    return (
        <div className="flex flex-col items-start gap-1">
            <label htmlFor="password" className="px-3">
                <b>{inputFieldLabel}</b></label>
            <input id="password" type="password"
                   className="bg-[#D9D9D9] rounded-2xl p-3 w-80
                     inset-shadow-[0px_-5px_4px_rgba(0,0,0,0.25)]"
            />
        </div>
    );
}

export function Interest({ interestName }: { interestName: string }) {
    return (
        <div className="bg-[#FF986A] px-2 rounded-full">
            <p className="text-xs">{interestName}</p>
        </div>
    );
}

export function Carousel({ title}: { title: string }) {
    return (
        <section className="flex flex-col gap-3 items-start w-full md:w-1/3">
            <h1 className="text-2xl"><b>{title}</b></h1>
            <div className="flex gap-3 overflow-x-auto
                    overflow-y-hidden scroll-smooth snap-x snap-mandatory w-full">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-[#D9D9D9] w-48 h-60
                        flex-shrink-0 snap-start"></div>
                ))}
            </div>
        </section>
    );
}