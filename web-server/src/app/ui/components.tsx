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