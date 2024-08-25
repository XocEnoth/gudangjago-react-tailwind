import React from "react";
import Head from "../component/head-title";
import TeamList from "../component/team-list";

const team = () => {
    return (
        <>
            <div className="w-full flex justify-center mt-60">
                <div className="container px-120">
                    <Head text="Team" />
                    <div className="w-full flex justify-between items-center mt-11">
                        <TeamList
                            src="iqbal.png"
                            nama="M. IQBAL HERMAWAN"
                            list="IT CONSULTANT"
                        />
                        <TeamList
                            src="deden.png"
                            nama="DEDEN SETIAIWAN"
                            list="IT CONSULTANT"
                        />
                        <TeamList
                            src="ibnu.png"
                            nama="IBNU NURMAULUDIN"
                            list="FULLSTACK DEVELOPER"
                        />
                        <TeamList
                            src="alfian.png"
                            nama="MUHAMMAD ALFIAN"
                            list="FULLSTACK DEVELOPER"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default team;
