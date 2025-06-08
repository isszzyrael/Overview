import React, { useState, useEffect } from "react";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { isValidPhoneNumber, CountryCode } from "libphonenumber-js";

interface PhoneNumberInputProps {
    value: string;
    onChange: (value: string) => void;
    label: string;
}

export const PhoneNumberInput = ({
    value,
    onChange,
    label,
}: PhoneNumberInputProps) => {
    const [phoneNumber, setPhoneNumber] = useState<string>(value || "");
    const [valid, setValid] = useState<boolean>(true);
    const [selectedCountry, setSelectedCountry] = useState<CountryCode>("NG");

    useEffect(() => {
        setPhoneNumber(value);
    }, [value]);

    const handleChange = (value: string, country: CountryData) => {
        const formattedPhoneNumber = value.startsWith("+")
            ? value
            : `+${value}`;
        setPhoneNumber(formattedPhoneNumber);
        setSelectedCountry(country.countryCode.toUpperCase() as CountryCode);
        onChange(formattedPhoneNumber);

        validatePhoneNumber(formattedPhoneNumber);
    };

    const validatePhoneNumber = (phoneNumber: string) => {
        try {
            const isValid = isValidPhoneNumber(phoneNumber, selectedCountry);
            setValid(isValid);
        } catch (error) {
            setValid(false);
        }
    };

    return (
        <div className='flex flex-col w-full'>
            <label className='text-[14px] font-medium mb-2'>{label}</label>
            <div className='relative w-full'>
                <PhoneInput
                    country={selectedCountry.toLowerCase()}
                    value={phoneNumber}
                    onChange={handleChange}
                    inputProps={{ required: true }}
                    inputStyle={{
                        width: "100%",
                        paddingLeft: "50px",
                        borderRadius: "6px",
                    }}
                    containerStyle={{
                        width: "100%",
                        border: "1px solid #ccc",
                        borderRadius: "6px",
                    }}
                />
            </div>

            {!valid && (
                <p className='text-red-600 text-sm mt-2'>
                    Please enter a valid phone number for {selectedCountry}.
                </p>
            )}
        </div>
    );
};
