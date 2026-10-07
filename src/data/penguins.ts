import rawPenguins from "./penguins.json";

export const speciesList = ["Adelie", "Gentoo", "Chinstrap"] as const;

export const penguinsWithBeakMeasurements = rawPenguins.filter(
    (penguin) =>
        penguin.culmen_length_mm != null &&
        penguin.culmen_depth_mm != null,
);

export const penguinsWithCompleteMeasurements = rawPenguins.filter(
    (penguin) =>
        penguin.culmen_length_mm != null &&
        penguin.culmen_depth_mm != null &&
        penguin.body_mass_g != null &&
        penguin.flipper_length_mm != null,
);

export function getPenguinsBySpecies(species: string) {
    return penguinsWithBeakMeasurements.filter(
        (penguin) => penguin.species === species,
    );
}