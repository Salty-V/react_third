function ProfilMenu() {

    const profile = {
        firstName : "Camille",
        lastName : "B",
        job : "dev",
    };

    return (
        <li>
            {profile.firstName} {profile.lastName} - {profile.job}
        </li>
    )
}

export default ProfilMenu;