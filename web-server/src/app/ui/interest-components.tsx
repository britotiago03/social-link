"use client";

import Image from "next/image";

export function Interest({ interestName }: { interestName: string }) {
    return (
        <div className="bg-[#FF986A] px-2 rounded-full">
            <p>{interestName}</p>
        </div>
    );
}

export function Interests({ textSize }: {textSize: string}) {
    return (
        <div className={`flex gap-2 flex-wrap ${textSize} font-normal`}>
            <Interest interestName="Sports"/>
            <Interest interestName="Music"/>
            <Interest interestName="Study Groups"/>
            <Interest interestName="Arts & Crafts"/>
            <Interest interestName="Movies & TV"/>
            <Interest interestName="Games"/>
            <Interest interestName="Nature"/>
            <Interest interestName="Board Games"/>
        </div>
    );
}

export function InterestCard({ name, iconSrc, iconWidth, iconHeight, iconAlt}:
                                 { name: string, iconSrc: string,
                                     iconWidth: number, iconHeight: number,
                                     iconAlt: string }) {
    return (
        <div className="flex flex-col gap-3 text-lg font-bold">
            <div className="bg-[#6E0061] p-7 rounded-full">
                <Image
                    src={iconSrc}
                    width={iconWidth}
                    height={iconHeight}
                    alt={iconAlt}
                />
            </div>
            <p>{name}</p>
        </div>
    );
}

export function InterestsGrid() {
    return (
        <div className="grid grid-cols-3 gap-5">
            <InterestCard
                name="Sports"
                iconSrc="/interests/interest_sports_icon.svg"
                iconWidth={60}
                iconHeight={60}
                iconAlt="Sports Icon"
            />
            <InterestCard
                name="Music"
                iconSrc="/interests/interest_music_icon.svg"
                iconWidth={60}
                iconHeight={60}
                iconAlt="Music Icon"
            />
            <InterestCard
                name="Study Groups"
                iconSrc="/interests/interest_study_groups_icon.svg"
                iconWidth={60}
                iconHeight={60}
                iconAlt="Study Groups Icon"
            />
            <InterestCard
                name="Arts & Crafts"
                iconSrc="/interests/interest_arts_crafts_icon.svg"
                iconWidth={60}
                iconHeight={60}
                iconAlt="Arts & Crafts Icon"
            />
            <InterestCard
                name="Movies & TV"
                iconSrc="/interests/interest_movies_tv_icon.svg"
                iconWidth={60}
                iconHeight={60}
                iconAlt="Movies & TV Icon"
            />
            <InterestCard
                name="Games"
                iconSrc="/interests/interest_games_icon.svg"
                iconWidth={60}
                iconHeight={60}
                iconAlt="Games Icon"
            />
            <InterestCard
                name="Nature"
                iconSrc="/interests/interest_nature_icon.svg"
                iconWidth={60}
                iconHeight={60}
                iconAlt="Nature Icon"
            />
            <InterestCard
                name="Board Games"
                iconSrc="/interests/interest_board_games_icon.svg"
                iconWidth={60}
                iconHeight={60}
                iconAlt="Board Games Icon"
            />
            <InterestCard
                name="Science"
                iconSrc="/interests/interest_science_icon.svg"
                iconWidth={60}
                iconHeight={60}
                iconAlt="Science Icon"
            />
            <InterestCard
                name="Travel"
                iconSrc="/interests/interest_travel_icon.svg"
                iconWidth={60}
                iconHeight={60}
                iconAlt="Travel Icon"
            />
            <InterestCard
                name="Technology"
                iconSrc="/interests/interest_technology_icon.svg"
                iconWidth={60}
                iconHeight={60}
                iconAlt="Technology Icon"
            />
            <InterestCard
                name="Animals"
                iconSrc="/interests/interest_animals_icon.svg"
                iconWidth={60}
                iconHeight={60}
                iconAlt="Animals Icon"
            />
            <InterestCard
                name="Economy"
                iconSrc="/interests/interest_economy_icon.svg"
                iconWidth={60}
                iconHeight={60}
                iconAlt="Economy Icon"
            />
            <InterestCard
                name="Fashion"
                iconSrc="/interests/interest_fashion_icon.svg"
                iconWidth={60}
                iconHeight={60}
                iconAlt="Fashion Icon"
            />
            <InterestCard
                name="Politics"
                iconSrc="/interests/interest_politics_icon.svg"
                iconWidth={60}
                iconHeight={60}
                iconAlt="Politics Icon"
            />
            <InterestCard
                name="Charity"
                iconSrc="/interests/interest_charity_icon.svg"
                iconWidth={60}
                iconHeight={60}
                iconAlt="Charity Icon"
            />
            <InterestCard
                name="Cooking"
                iconSrc="/interests/interest_cooking_icon.svg"
                iconWidth={60}
                iconHeight={60}
                iconAlt="Cooking Icon"
            />
            <InterestCard
                name="Volunteering"
                iconSrc="/interests/interest_volunteering_icon.svg"
                iconWidth={60}
                iconHeight={60}
                iconAlt="Volunteering Icon"
            />
        </div>
    );
}