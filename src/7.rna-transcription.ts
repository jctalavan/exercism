/**
 * Given a DNA strand, return its RNA complement (per RNA transcription).
 * Both DNA and RNA strands are a sequence of nucleotides.
 * The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).
 * The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).
 * Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:
 *      G -> C
 *      C -> G
 *      T -> A
 *      A -> U
 */

// https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/

enum NucleotideTranscript {
    G = 'C',
    C = 'G',
    T = 'A',
    A = 'U'
}

type NucleotideTranscriptStrings = keyof typeof NucleotideTranscript;

export function toRna(dna : string):string {
    
    let rna:string = '';

    [...dna].map(caracter => {
        let nucleotide: NucleotideTranscriptStrings = caracter as NucleotideTranscriptStrings;
        let transcript:string = NucleotideTranscript[nucleotide];

        if(transcript === undefined){
            throw new Error('Invalid input DNA.');
        }
        rna += transcript
    });

    return rna;
}