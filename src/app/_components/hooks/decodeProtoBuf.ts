import { novels } from '@/app/_proto/novels';

const decodeProtobuf = (base64String: string, schema: any): any => {
  try {
    // Validate base64 string before decoding
    const isValidBase64 = (str: string) => {
      try {
        atob(str);
        return true;
      } catch (e) {
        return false;
      }
    };

    if (!isValidBase64(base64String)) {
      throw new Error("Invalid base64 string received.");
    }

    // Decode the base64 string into binary
    const binaryString = atob(base64String);
    const uint8Array = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      uint8Array[i] = binaryString.charCodeAt(i);
    }

    // Deserialize the Protobuf binary data
    const novelsResponse = schema(uint8Array);

    // Return the deserialized object
    console.log(novelsResponse.toObject());
    return novelsResponse.toObject();
  } catch (error: any) {
    console.error('Error decoding Protobuf data:', error);
    throw new Error('Failed to decode Protobuf data');
  }
};

export default decodeProtobuf;
