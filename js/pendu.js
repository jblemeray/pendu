    var progress = [" _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ "],
        motAtrouver = "anticonstitutionnellement";

    for (var i = 0; i < 15; i++) {

        if (motAtrouver === progress.join("")) {
            console.log("Le mot à trouver est bien : " + motAtrouver)
        } else {

            var saisieLettre = prompt("Proposez une lettre : ");


            switch (saisieLettre) {
                case "a":
                    progress[0] = "a";
                    console.log(progress.join(""));
                    break;

                case "b":
                    console.log("Cette lettre ne figure pas dans le mot");
                    break;

                case "c":
                    progress[4] = "c";
                    console.log(progress.join(""));
                    break;

                case "d":
                    console.log("Cette lettre ne figure pas dans le mot");
                    break;

                case "e":
                    progress[17] = "e";
                    progress[20] = "e";
                    progress[22] = "e";
                    console.log(progress.join(""));
                    break;

                case "f":
                    console.log("Cette lettre ne figure pas dans le mot");
                    break;

                case "g":
                    console.log("Cette lettre ne figure pas dans le mot");
                    break;

                case "h":
                    console.log("Cette lettre ne figure pas dans le mot");
                    break;

                case "i":
                    progress[3] = "i";
                    progress[9] = "i";
                    progress[13] = "i";
                    console.log(progress.join(""));
                    break;

                case "j":
                    console.log("Cette lettre ne figure pas dans le mot");
                    break;

                case "k":
                    console.log("Cette lettre ne figure pas dans le mot");
                    break;

                case "l":
                    progress[18] = "l";
                    progress[19] = "l";
                    console.log(progress.join(""));
                    break;

                case "m":
                    progress[21] = "m";
                    console.log(progress.join(""));
                    break;

                case "n":
                    progress[1] = "n";
                    progress[6] = "n";
                    progress[15] = "n";
                    progress[16] = "n";
                    progress[23] = "n";
                    console.log(progress.join(""));
                    break;

                case "o":
                    progress[5] = "o";
                    progress[14] = "o";
                    console.log(progress.join(""));
                    break;

                case "p":
                    console.log("Cette lettre ne figure pas dans le mot")
                    break;

                case "q":
                    console.log("Cette lettre ne figure pas dans le mot");
                    break;

                case "r":
                    console.log("Cette lettre ne figure pas dans le mot");
                    break;

                case "s":
                    progress[7] = "s";
                    console.log(progress.join(""));
                    break;

                case "t":
                    progress[2] = "t";
                    progress[8] = "t";
                    progress[10] = "t";
                    progress[12] = "t";
                    progress[24] = "t";
                    console.log(progress.join(""));
                    break;

                case "u":
                    progress[11] = "u";
                    console.log(progress.join(""));
                    break;

                case "v":
                    console.log("Cette lettre ne figure pas dans le mot");
                    break;

                case "w":
                    console.log("Cette lettre ne figure pas dans le mot");
                    break;

                case "x":
                    console.log("Cette lettre ne figure pas dans le mot");
                    break;

                case "y":
                    console.log("Cette lettre ne figure pas dans le mot");
                    break;

                case "z":
                    console.log("Cette lettre ne figure pas dans le mot");
                    break;

                default:
                    console.log("Ce caractère n'est pas prit en compte.");
            }
            console.log("Il reste " + (15 - i) + " coups");
        }
    }
